#pragma strict

var q : float;
var Speed = new Vector2();
var Acc = new Vector2(0,0);
var particles : GameObject[];
var neonColors = [Color(1,0.667,0,1), Color(1,0,0.667,1), Color(0.667,1,0,1), Color(0,1,0.667,1), Color(0,0.667,1,1), Color(0.667,0,1,1)];

function Start () {
	var sr : SpriteRenderer;
	var trails : Component[];
	sr = gameObject.GetComponent(SpriteRenderer);
	particles = GameObject.FindGameObjectsWithTag("Particle");
	this.transform.localScale = new Vector3(Mathf.Abs(q),Mathf.Abs(q),q);
	sr.color = neonColors[Random.Range(0,6)];
	trails = GetComponentsInChildren.<TrailRenderer>();
	for (var tr : TrailRenderer in trails){
		tr.startColor = sr.color;
		tr.startWidth = Mathf.Abs(q)*9;
		tr.endWidth = Mathf.Abs(q)*9;
	}
}

function Update () {
	var F = new Vector2(0,0);
	var r = new Vector2(0,0);
	for(var i : int = 0; i < particles.Length; i++){
    	r =  particles[i].transform.position - this.transform.position;
        if(r != new Vector2(0,0)){
        	F += -20*r.normalized*(this.transform.localScale.z*particles[i].transform.localScale.z/Mathf.Pow(r.magnitude,2));
        }
    }
    Acc = F/this.transform.localScale.x;
    transform.Translate(Speed*Time.deltaTime);
	Speed = Speed + Acc*Time.deltaTime;
}
