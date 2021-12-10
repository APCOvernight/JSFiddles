new Vue({
    el: '#my-target-element',
    template: '<div>Just an example with {{varName}}</div>',
    data: {varName: null},
    beforeMount: function () {
        this.varName = this.$el.attributes['data-var-name'].value;
    },
});