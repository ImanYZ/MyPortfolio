require.config({
  paths: {
    'domReady': '../components/requirejs-domready/domReady',
    'jquery': '../components/jquery/dist/jquery.min',
    'rangy': '../components/wysihtml5x/lib/rangy/rangy-core',
    'rangy-selectionsaverestore': '../components/wysihtml5x/lib/rangy/rangy-selectionsaverestore',
    'bootstrap': '../components/bootstrap/dist/js/bootstrap.min',
    'bootstrap.wysihtml5': '../../../../../../../../../../../Desktop/bootstrap3-wysiwyg-master/dist/amd/bootstrap3-wysihtml5.all.js',
    'bootstrap.wysihtml5.de-DE': '../../../../../../../../../../../Desktop/bootstrap3-wysiwyg-master/dist/locales/bootstrap-wysihtml5.de-DE.js'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'rangy-selectionsaverestore': {
      deps: ['rangy']
    }
  },
  deps: [
    './start'
  ]
});
