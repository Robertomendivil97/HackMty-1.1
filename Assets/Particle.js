#pragma strict

var q : float;
var Speed = new Vector2();
var Acc = new Vector2(0,0);
var particles : GameObject[];

function Start () {
	particles = GameObject.FindGameObjectsWithTag("Particle");
	this.transform.localScale = new Vector3(Mathf.Abs(q),Mathf.Abs(q),0);
}

function Update () {
	var F = new Vector2(0,0);
	var r = new Vector2(0,0);
	for(var i : int = 0; i < particles.Length; i++){
    	r =  particles[i].transform.position - this.transform.position;
        if(r != new Vector2(0,0)){
        	F += 20*r.normalized*(this.transform.localScale.x*particles[i].transform.localScale.x)/Mathf.Pow(r.magnitude,2);
        	Debug.Log ("F of " + this.name + "  due of " + particles[i].name +" = " + F.x + "," + F.y);
        }
    }
    Acc = F/this.transform.localScale.x;
    transform.Translate(Speed*Time.deltaTime);
	Speed = Speed + Acc*Time.deltaTime;
}
