FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /ruby-app
WORKDIR /ruby-app
COPY /ruby-app/Gemfile /ruby-app/Gemfile
COPY /ruby-app/Gemfile.lock /ruby-app/Gemfile.lock
RUN bundle install
COPY . /ruby-app
