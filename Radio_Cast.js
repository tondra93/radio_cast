// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});
intent('play $ (CHANNEL* (.*)) fm',p=>{
   let channel=project.radios.filter(x=>x.name.toLowerCase() === p.CHANNEL.value.toLowerCase())[0];
    try{
        p.play({"command":"play_channel","id": channel.id});
        p.play("(Playing now | Ok | Doing it)");

        
    }catch(err){
        console.log("Can't play");
        p.play("I can't play this");
        
    }
});
intent('play (some|) $(CATEGORY*(.*)) music',p=>{
   let channel=project.radios.filter(x=>x.name.toLowerCase() === p.CATEGORY.value.toLowerCase())[0];
    try{
        p.play({"command":"play_channel","id": channel.id});
        p.play("(Playing now | Ok | Doing it)");

        
    }catch(err){
        console.log("Can't play");
        p.play("I can't play this");
        
    }
});
intent('(play)', 'play (the|) (some|) music',p=>{
    p.play({"command":"play"});
    p.play("(Playing now | Ok | Doing it)");
});
intent('stop (it|)', 'stop (the|) music','pause (it|)', 'pause (the|) music', p=>{
    p.play({"command":"stop"});
    p.play("(Stopping now | Ok | Doing it)");
});
intent('(play |) next (channel | FM | radio|)',p=>{
   p.play({"command":"next"});
   p.play("(ok | doing it | sure)");
});
intent('(play |) previous (channel | FM | radio|)',p=>{
   p.play({"command":"prev"});
   p.play("(ok | doing it | sure)");
});