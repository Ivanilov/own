FROM php:7.3.7-fpm-alpine3.10

RUN apk add --no-cache autoconf gcc libc-dev make pkgconfig libtool imagemagick-dev imagemagick libxml2-dev tzdata composer   \
  && pecl install xdebug-2.7.0                                                                                                \
  && pecl install imagick                                                                                                     \
  && docker-php-ext-install soap                                                                                              \
  && docker-php-ext-enable xdebug                                                                                             \
  && docker-php-ext-enable imagick                                                                                            \
  && docker-php-ext-install pdo_mysql                                                                                         \
  && docker-php-ext-install bcmath                                                                                            \
  && docker-php-ext-install sockets                                                                                           \
  && apk del --purge -r autoconf gcc libc-dev make pkgconfig libtool                                                          \
  && rm /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini


RUN mkdir -p /var/www/backend && chown www-data:www-data /var/www/backend

WORKDIR /var/www/backend

COPY --chown=www-data:www-data composer.json  /var/www/backend/

USER www-data

RUN composer install

COPY --chown=www-data:www-data . /var/www/backend/
