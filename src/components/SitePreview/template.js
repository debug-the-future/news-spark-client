export const template = `
doctype html
html
  head
    title #{headline}
    link(href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', rel='stylesheet')
    link(href='https://fonts.googleapis.com/css?family=Open+Sans', rel='stylesheet')
    style(type='text/css').
      .hero {
          background: gray;
          color: white;
      }
  body
    .container
      .row
        .col.col-xs-12.hero
          h1 #{headline}
          h3 #{hashtag}
`;