FROM php:8.0-fpm
EXPOSE 5173

ENV TZ Asia/Tokyo

RUN apt-get update && \
	apt-get install -y git unzip vim libpq-dev nodejs npm \
	&& npm install n -g && n 18.0.0 \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

COPY ./laravel-docker/app/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

WORKDIR /laravel-app
