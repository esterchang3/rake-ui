# frozen_string_literal: true

require "rake"
require "fileutils"
require "open3"

module RakeUi
  class Engine < ::Rails::Engine
    isolate_namespace RakeUi

    # Configure asset precompilation
    initializer "rake_ui.assets.precompile" do |app|
      app.config.assets.precompile += %w( rake_ui/application.js rake_ui/application.css )
    end
  end
end
