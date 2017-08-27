#pragma strict

function Start () {
	
}

function Update () {
	
}
function OnTriggerEnter2D(hit:Collider2D){
    if (hit.transform.tag=="Particle"){
        //Destroy(gameObject);
        var ScriptThatYouWant = GameObject.Find("Main Camera").GetComponent.<GameRule>();
        ScriptThatYouWant.perdiste=true;
    }
}
