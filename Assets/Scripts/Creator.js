#pragma strict

public var fruit : Rigidbody;

public var spawn_timer : float = 30;
var current_timer : float;


function Start () {
	current_timer = spawn_timer;
}

function Update () {
	current_timer -= Time.deltaTime;
	
	if (current_timer < 0)
	{
		var x_spawn = Random.value * 18 - 9;
		
		var new_position = transform.position;
		new_position.x += x_spawn;
		
		var offset_x = 200 * Random.value + 100;
		if (x_spawn > 0)
			offset_x *= -1;
		
		var clone : Rigidbody = Instantiate(fruit, new_position, transform.rotation);
		clone.AddForce(offset_x, 650, 0);
		
		current_timer = spawn_timer;
	}
}