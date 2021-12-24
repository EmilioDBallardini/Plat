// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "controllers"
import "channels"
import '../js/bootstrap_js_files.js'


Rails.start()
Turbolinks.start()
ActiveStorage.start()