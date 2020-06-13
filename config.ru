use Rack::Static,
  :urls => ["/css", "/img", "/js"],
  :root => "public"

run lambda { |env|
  request = Rack::Request.new(env)
  file = request.env['REQUEST_URI'].match(/([^\/]+)(?=\.\w+$)/)
  file = file ? file[0] : "index"

  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open("public/#{file}.html", File::RDONLY)
  ]
}