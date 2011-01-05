#!/usr/bin/ruby

require "rubygems"
require "sinatra"

DEFAULT_CONNECT_URL =  'http://platform.linkedin.com/in.js'

get '/' do
  erb :index
end

helpers do
  
  def server_url
    server = params[:server] || params[:qa]
    if server == nil || server.empty? then
      DEFAULT_CONNECT_URL
    else
      server.match(/\d{3}/) ? "https://qatest#{server}.qa.linkedin.com:8443/uas/in.js" : server
    end
  end
end