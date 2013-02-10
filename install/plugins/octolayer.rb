# Title: OpenLayers tag for Jekyll/Octopress
# Author: Maximilian Güntner <maximilian.guentner@gmail.com>
# Description: Embed beautfiul maps in your pages
#
# Syntax:  {% map lat lon zoomlevel markerTitle* markerDescription* %} - * => optional
#

module Jekyll
  class OctoLayer < Liquid::Tag
    # Class variable for creating unique mapIDs
    @@mapCount = 0
    @lat = nil
    @lon = nil
    @title = "" 
    @description = ""
    @zoomLevel = nil
    @mapID = nil
    def initialize(tag_name, markup, tokens)
      if markup =~ /(-?\d{1,3}\.\d+)(\s+)(-?\d{1,3}\.\d+)(\s+)(\d+)((\s+)(\"(([^\"])*)\"))?((\s+)(\"(([^\"])*)\"))?(\s*)/i
        @lat=$1
        @lon=$3
        @zoomLevel=$5
        @title = $9
        @description = $14
        if @title
          @title = @title.gsub(/[']/, "\\\\'")
        end
        if @description
          @description = @description.gsub(/[']/, "\\\\'")
        end
        @mapID = @@mapCount + 1
        @@mapCount += 1  
      end
      super
    end
    def render(context)
      output = super
      if @lat
        caption = "Map Data: <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors <a href='http://www.openstreetmap.org/copyright'>License</a> - Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a><img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"
        source = "<div class='map'><div style='height:420px' id='map#{@mapID}'></div><div class='mapCaption'>#{caption}</div></div>"\
                 "<script type='text/javascript'>"\
                 "jQuery(document).ready(function() {"\
                 "initmap('map#{@mapID}',#{@lat},#{@lon},#{@zoomLevel},'#{@title}','#{@description}');"\
                 "});"\
                 "</script>"
        source
      else
        "Error processing input, expected syntax: {% map lat lon zoomlevel markerTitle* markerDescription* %} - * => optional"
      end
    end   
  end
end

Liquid::Template.register_tag('map', Jekyll::OctoLayer)
