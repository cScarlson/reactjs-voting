
var eventhub = new (function EventHub(channels) {
    var thus = this;
    var channels = channels || {};
    
    function subscribe(channel, handler) {
        if (!channels[channel]) channels[channel] = []; 
        var subscription = { type: channel, context: this, handler: handler };
        channels[channel].push(subscription);
        
        return this;
    }
    
    function publish(channel) {
        if (!channels[channel]) channels[channel] = [];
        var args = Array.prototype.slice.call(arguments, 1)
          , subscriptions = channels[channel];
        var event = { type: channel };
        
        args.unshift(event);
        
        for (var i = 0, len = subscriptions.length; i < len; i++) {
            var subscription = subscriptions[i], context = subscription.context, handler = subscription.handler;
            handler && handler.apply(context, args);
        }
        
    }
    
    function unsubscribe(channel, ref) {
        if (!channels[channel]) return;
        var subscriptions = channels[channel];
        
        for (var i = subscriptions.length; i--;) {
            var subscription = subscriptions[i], handler = subscription.handler, context = subscription.context;
            
            if (ref === handler || ref === context) subscriptions.splice(i, 1);
            
        }
        
        return this;
    }
    
    function installTo(object) {
        var object = EventHub.call(object, channels);
        return object;
    }
    
    // export precepts
    this.on = subscribe;
    this.off = unsubscribe;
    this.fire = publish;
    this.installTo = installTo;
    
    return this;
})();

export default eventhub;
