var vue1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance 1',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vue2 = new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS Instance 2',
    showParagraph: false
  }
});
