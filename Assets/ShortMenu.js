#pragma strict

var Charges1 = [0.15,-0.05,-0.05];
var PreParticle : GameObject;
var qs : GameObject;
var i :int = 0;
var Timer : float = 0;

function Start () {

}

function Update () {
	
	if (Application.loadedLevelName=="lvl1"){
		if (i<Charges1.Length){
			qs = Instantiate(PreParticle);
			qs.transform.localScale.z = Charges1[i];
			i++;
		}
	}
}
