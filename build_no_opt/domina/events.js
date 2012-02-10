goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.events');
/**
* returns true if the node(child) is a child of parent
*/
domina.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__15625 = parent;
var G__15626 = child.parentNode;
parent = G__15625;
child = G__15626;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
domina.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__15632 = e.relatedTarget;
var this$__15634 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15637 = cljs.core.not.call(null,(re__15632 === this$__15634));

if(cljs.core.truth_(and__3546__auto____15637))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15634,re__15632));
} else
{return and__3546__auto____15637;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
/**
* Generic event wrapper that handles listening and cleanup of wrapped events
*/
domina.events.gen_wrapper = (function gen_wrapper(event_key,wrapped_key,wrapper_func){
var obj__15644 = (new Object());
var wevent__15645 = cljs.core.name.call(null,wrapped_key);
var event__15648 = cljs.core.name.call(null,event_key);

obj__15644.wrapped_event = wevent__15645;
obj__15644.event = event__15648;
obj__15644.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15649 = wrapper_func.call(null,func);

callback__15649.listen = func;
callback__15649.scope = opt_scope;
callback__15649.event = event__15648;
callback__15649.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15645,callback__15649,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15645,callback__15649,capture);
}
});
obj__15644.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15691 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15645,false),goog.events.getListeners.call(null,elm,wevent__15645,true)):goog.events.getListeners.call(null,elm,wevent__15645,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15692 = obj.listener;
var lfunc__15693 = listener__15692.listen;
var scope__15694 = listener__15692.scope;
var capture__15695 = listener__15692.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15698 = (function (){var or__3548__auto____15697 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15697))
{return or__3548__auto____15697;
} else
{return cljs.core._EQ_.call(null,lfunc__15693,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15698))
{var or__3548__auto____15700 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15700))
{return or__3548__auto____15700;
} else
{return cljs.core._EQ_.call(null,scope__15694,opt_scope);
}
} else
{return and__3546__auto____15698;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15645,listener__15692,capture__15695);
} else
{return goog.events.unlisten.call(null,elm,wevent__15645,listener__15692,capture__15695);
}
} else
{return null;
}
}),listeners__15691));
});
return obj__15644;
});
domina.events.wrapper_register = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
domina.events.reg_event_wrapper_BANG_ = (function reg_event_wrapper_BANG_(event_key,wrapped_key,wrapper_func){
return cljs.core.swap_BANG_.call(null,domina.events.wrapper_register,cljs.core.assoc,event_key,domina.events.gen_wrapper.call(null,event_key,wrapped_key,wrapper_func));
});
/**
* adding an event to the selected nodes
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___15757 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15758 = (function (nds,event,func,capture){
var wrapper__15750 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15751__15752 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15751__15752))
{var node__15753 = cljs.core.first.call(null,G__15751__15752);
var G__15751__15754 = G__15751__15752;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15750)))
{goog.events.listen.call(null,node__15753,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15753,wrapper__15750,func,capture);
}
var temp__3698__auto____15755 = cljs.core.next.call(null,G__15751__15754);

if(cljs.core.truth_(temp__3698__auto____15755))
{var G__15751__15756 = temp__3698__auto____15755;

{
var G__15760 = cljs.core.first.call(null,G__15751__15756);
var G__15761 = G__15751__15756;
node__15753 = G__15760;
G__15751__15754 = G__15761;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
listen_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return listen_BANG___15757.call(this,nds,event,func);
case  4 :
return listen_BANG___15758.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_BANG_;
})()
;
/**
* removing a specific event from the selected nodes
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___15797 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15798 = (function (nds,event,func,capture){
var wrapper__15767 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15768__15770 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15768__15770))
{var node__15772 = cljs.core.first.call(null,G__15768__15770);
var G__15768__15773 = G__15768__15770;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15767)))
{goog.events.unlisten.call(null,node__15772,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15767.unlisten(node__15772,func,capture);
}
var temp__3698__auto____15787 = cljs.core.next.call(null,G__15768__15773);

if(cljs.core.truth_(temp__3698__auto____15787))
{var G__15768__15790 = temp__3698__auto____15787;

{
var G__15802 = cljs.core.first.call(null,G__15768__15790);
var G__15803 = G__15768__15790;
node__15772 = G__15802;
G__15768__15773 = G__15803;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
unlisten_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return unlisten_BANG___15797.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15798.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten_BANG_;
})()
;
/**
* removes all listeners for a given set of events on the selected nodes
* @param {...*} var_args
*/
domina.events.remove_listeners_BANG_ = (function() { 
var remove_listeners_BANG___delegate = function (nds,event_list){
var G__15808__15810 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15808__15810))
{var node__15812 = cljs.core.first.call(null,G__15808__15810);
var G__15808__15814 = G__15808__15810;

while(true){
var map_func__15816 = ((function (node__15812,G__15808__15814){
return (function (p1__15763_SHARP_){
var wrapper__15815 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15763_SHARP_);

if(cljs.core.truth_(wrapper__15815))
{return wrapper__15815.unlisten(node__15812);
} else
{return goog.events.removeAll.call(null,node__15812,cljs.core.name.call(null,p1__15763_SHARP_));
}
});})(node__15812,G__15808__15814))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15816,event_list));
var temp__3698__auto____15817 = cljs.core.next.call(null,G__15808__15814);

if(cljs.core.truth_(temp__3698__auto____15817))
{var G__15808__15822 = temp__3698__auto____15817;

{
var G__15825 = cljs.core.first.call(null,G__15808__15822);
var G__15826 = G__15808__15822;
node__15812 = G__15825;
G__15808__15814 = G__15826;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
};
var remove_listeners_BANG_ = function (nds,var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return remove_listeners_BANG___delegate.call(this, nds, event_list);
};
remove_listeners_BANG_.cljs$lang$maxFixedArity = 1;
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15828){
var nds = cljs.core.first(arglist__15828);
var event_list = cljs.core.rest(arglist__15828);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15829 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15831 = (cljs.core.truth_(wrapper__15829)?wrapper__15829.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15832 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15832.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15834__15842 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15834__15842))
{var node__15843 = cljs.core.first.call(null,G__15834__15842);
var G__15834__15844 = G__15834__15842;

while(true){
goog.events.fireListeners.call(null,node__15843,nevent__15831,capture,event_obj__15832);
var temp__3698__auto____15845 = cljs.core.next.call(null,G__15834__15844);

if(cljs.core.truth_(temp__3698__auto____15845))
{var G__15834__15847 = temp__3698__auto____15845;

{
var G__15875 = cljs.core.first.call(null,G__15834__15847);
var G__15876 = G__15834__15847;
node__15843 = G__15875;
G__15834__15844 = G__15876;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseenter","﷐'mouseover",domina.events.mouse_enter_leave);
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseleave","﷐'mouseout",domina.events.mouse_enter_leave);