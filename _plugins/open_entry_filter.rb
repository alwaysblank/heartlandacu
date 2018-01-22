module Jekyll
  module OpeningHoursFilter
    def opening_hours(day)
      processed = Array.new
      day['times'].each do |time|
        processed.push("#{time['open']}:00-#{time['close']}:00")
      end
      "#{ day['day'][0,2] } #{ processed.join(',') }"
    end
  end
end

Liquid::Template.register_filter(Jekyll::OpeningHoursFilter)