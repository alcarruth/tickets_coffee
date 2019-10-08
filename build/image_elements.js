// Generated by CoffeeScript 2.4.1
(function() {
  var ImageElements;

  ImageElements = class ImageElements {
    constructor(images) {
      this.add_conference_logos = this.add_conference_logos.bind(this);
      this.add_team_logos = this.add_team_logos.bind(this);
      this.images = images;
      this.div = document.createElement('div');
      this.div.setAttribute('id', 'images');
      this.html = "";
      this.add_conference_logos();
      this.add_team_logos();
      this.div.innerHTML = this.html;
      document.body.appendChild(this.div);
    }

    add_conference_logos() {
      var alt, id, k, ref, results, src, v;
      ref = this.images.conference_logos_64;
      results = [];
      for (k in ref) {
        v = ref[k];
        id = `conference-logo-${k}`;
        src = `data:image/png;base64, ${v}`;
        alt = `logo for ${k}`;
        results.push(this.html += `<img id="${id}" src="${src}" alt="${alt}"> \n`);
      }
      return results;
    }

    add_team_logos() {
      var alt, id, k, ref, results, src, v;
      ref = this.images.team_logos_64;
      results = [];
      for (k in ref) {
        v = ref[k];
        id = `team-logo-${k}`;
        src = `data:image/png;base64, ${v}`;
        alt = `logo for ${k}`;
        results.push(this.html += `<img id="${id}" src="${src}" alt="${alt}"> \n`);
      }
      return results;
    }

  };

  exports.ImageElements = ImageElements;

}).call(this);
