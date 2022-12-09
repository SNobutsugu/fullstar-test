FROM ruby:3.1.2
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get update -qq \
    && apt-get install -y nodejs \
    && npm install -g yarn
RUN mkdir /ruby-app
WORKDIR /ruby-app
COPY /ruby-app/Gemfile /ruby-app/Gemfile
COPY /ruby-app/Gemfile.lock /ruby-app/Gemfile.lock
RUN bundle install
COPY . /ruby-app
