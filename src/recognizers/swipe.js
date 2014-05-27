function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    defaults: {
        event: 'swipe',
        distance: 10,
        velocity: 0.6,
        pointers: 1
    },

    validTest: function(input) {
        console.log(input.velocity, this.options.velocity)

        return input.velocity > this.options.velocity &&
            input.distance > this.options.distance &&
            input.eventType == EVENT_END;
    },

    handler: function(input) {
        this.inst.trigger(this.options.event, input);
        this.inst.trigger(this.options.event + input.direction, input);
    }
});
