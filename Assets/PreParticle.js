#pragma strict
var q : float;
var neonColors = [Color(1,0.667,0,1), Color(1,0,0.667,1), Color(0.667,1,0,1), Color(0,1,0.667,1), Color(0,0.667,1,1), Color(0.667,0,1,1)];
var sprites: Sprite[];
var pos = [new Vector3(-7.8,2.9,0),new Vector3(-7.8,0.6,0),new Vector3(-7.8,-1.7,0)];
var preParticles : GameObject[];

function Start () {
	q = this.transform.localScale.z;
	var sr : SpriteRenderer;
	sr = gameObject.GetComponent(SpriteRenderer);
	if(q>0){
		sr.sprite = sprites[0];
	}
	else if(q<0){
		sr.sprite = sprites[1];
	}
	else{
		Destroy(this);
	}
	sr.color = neonColors[Random.Range(0,6)];
	this.transform.localScale = new Vector3(Mathf.Abs(q),Mathf.Abs(q),q);
	//this.transform.position = new Vector3(-7.8,-2.9,0);
}

function Update () {
	preParticles = GameObject.FindGameObjectsWithTag("pp");
	for(var j : int = 0; j < pos.Length; j++){
		for(var i : int = 0; i < preParticles.Length; i++){
		Debug.Log (i +" , " + j);
			if (preParticles[i].transform.position == pos[i]){
				
			}
			else{
				this.transform.position = pos[i];
			}
		}
	}
}
