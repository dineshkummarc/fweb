# ===========================================================================
# Project:   Fweb
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
#config :all, :required => :sproutcore

config :all, :required => [:sproutcore, :scui, 'sproutcore/table'], :load_fixtures => true
config :fweb, :theme => :fweb_theme
