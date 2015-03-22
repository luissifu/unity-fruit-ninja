#pragma strict

function Update () {
	var r = 45 * Time.deltaTime;

	transform.Rotate (r,r,r);

	if (transform.position.y < -10)
	{
		Destroy(this.gameObject);
		var g : Game = GameObject.Find("Game").GetComponent(Game);
		g.score--;
	}
}