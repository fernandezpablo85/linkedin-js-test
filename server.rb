#!/usr/bin/ruby

require "rubygems"
require "sinatra"

get '/' do
  erb :index
end

helpers do
  
  def connect_tag(params)
    """ <script type='text/javascript' src='http://#{params[:server]}/uas/in.js'>
          api_key: #{params[:key]}
          onLoad: IN.Test.onLogin
        </script>"""
  end
end