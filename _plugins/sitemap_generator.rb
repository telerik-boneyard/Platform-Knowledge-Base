module Jekyll
    
    class SitemapGenerator < Jekyll::Generator
        priority :lowest

        def generate(site)
            #we are not using the jekyll-sitemap plugin since it tends to randomly not respect our generated sitemap and generates a default one
            source_path = File.expand_path('sitemap.xml', File.dirname(__FILE__))

            site_map = Page.new(site, File.dirname(__FILE__), '', 'sitemap.xml')
            site_map.content = File.read(source_path)

            hash = Hash.new
            hash['site'] = Hash.new
            site.instance_variables.each {|var| hash['site'][var.to_s.delete("@")] = site.instance_variable_get(var) }

            site.keep_files ||= []
            site.keep_files << 'sitemap.xml'

            site_map.render(Hash.new, hash)
            site_map.write(site.dest)
        end
    end
end