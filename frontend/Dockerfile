FROM node:10.16.3-slim

WORKDIR /home/node

COPY --chown=node:node package.json  /home/node/

RUN yarn install --frozen-lockfile && \
    yarn cache clean

COPY --chown=node:node . /home/node

ARG API_URL

ENV API_URL $API_URL

RUN yarn lint &&                      \
    yarn tsc &&                       \
    yarn build

RUN chmod 755 entrypoint.sh

ENTRYPOINT ["/home/node/entrypoint.sh"]