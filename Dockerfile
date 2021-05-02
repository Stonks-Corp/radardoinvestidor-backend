FROM node:15-alpine AS builder

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production

RUN apt-get update \
    && apt-get install yarn -y \
    && apt-get install dumb-init -y \
    && rm -rf /var/lib/apt/lists/*

COPY package.json /app/package.json
COPY prisma /app/prisma/

RUN yarn install --silent

# Generate prisma
RUN npx prisma generate
# Sync the migrations
RUN npm prisma migrate deploy

# Add app
COPY . /app

# Build the app
RUN yarn build

FROM node:15-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build

EXPOSE 4000

# Start the app
ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "run", "start"]
