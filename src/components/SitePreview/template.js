export const template = `
doctype html
html
  head
    title #{headline}
    link(href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', rel='stylesheet')
    link(href='https://fonts.googleapis.com/css?family=Open+Sans', rel='stylesheet')
    style(type='text/css').
      html {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: lighter;
      }
      .hero {
        padding: 28px 0;
        background: gray;
        color: white;
        text-align: center;
      }
      .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px; height: 0; overflow: hidden;
      }
      .video-container iframe,
      .video-container object,
      .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
  body
    .container-fluid
      .row
        .col.col-xs-12.hero
          h1 #{headline}
          h3
            strong \##{hashtag}
        .col.col-xs-12.video-container
          iframe(width='853' height='480' src='https://www.youtube.com/embed/-_Pb0Abb6hc?rel=0' frameborder='0' allowfullscreen)
        .col.col-xs-12
          h3 What is this all about?
          p #{what}
        .col.col-xs-12
          h3 What else should I know?
          p #{details}
`;