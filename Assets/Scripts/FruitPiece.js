#pragma strict

public var dir : int = 1;

function Update () {

	var r = 90 * dir * Time.deltaTime;

	transform.Rotate (r,r,r);

	if (transform.position.y < -10)
	{
		Destroy(this.gameObject);
	}
}