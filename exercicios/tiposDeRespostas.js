const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async ctx => {
  //Respondendo com emojii
  await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}! 😎`);

  //Respondendo com marcações HTML
  await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
  <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
  <a href="http://www.google.com">Google</a>`);

  //Respondendo com Markdown
  await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
        + ' _de várias_ `formas` ```possíveis```'
        + ' [Google](http://www.google.com)');

  //Respondendo com imagem local
  //await ctx.replyWithPhoto({source: `${__dirname}/cat.jpeg`});

  //Respondendo com foto online
  await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg',{ caption: 'Olha o estilo!' });

  //Respondendo com localização
  await ctx.replyWithLocation(29.9773008, 31.1303068);

  //Respondendo com vídeo
  await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v');
});
bot.startPolling();