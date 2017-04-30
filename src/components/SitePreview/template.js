export const template = `
doctype html
html
  head
    title #{headline}
    link(href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', rel='stylesheet')
    link(href='https://fonts.googleapis.com/css?family=Roboto|Slabo+27px', rel='stylesheet')
    style(type='text/css').
      html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: 'Slabo 27px', serif;
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
        background-color: black;
      }
      .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 0;
        width: 0;
        margin-top: -14px;
        margin-left: -10px;
        border-left: solid 20px white;
        border-top: solid 14px transparent;
        border-bottom: solid 14px transparent;
      }
      .play-button:after{
        content: "";
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.2);
        border: solid 1px white;
        position: absolute;
        left: -38px;
        top: -24px;
        border-radius: 30px;
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
          .play-button
          iframe(width='853' height='480' src='#{asset}' frameborder='0' allowfullscreen)
        .col.col-xs-12
          h3 What is this all about?
          p #{what}
        .col.col-xs-12
          h3 What else should I know?
          p #{details}
        .col.col-xs-12
          h3 How can I help?
          p #{help}
        .col.col-xs-12
          h3 How can I contact you?
          p #{contact}
`;