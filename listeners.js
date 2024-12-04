addEventListener('keydown', (e) => {
	if(e.keyCode == 87)
	{
		w_key_down = true;
	}
	else if(e.keyCode == 65)
	{
		a_key_down = true;
	}
	else if(e.keyCode == 83)
	{
		s_key_down = true;
	}
	else if(e.keyCode == 68)
	{
		d_key_down = true;
	}
	else if(e.keyCode == 32)
	{
		space_key_down = true;
	}
});

addEventListener('keyup', (e) => {
	if(e.keyCode == 87)
	{
		w_key_down = false;
	}
	else if(e.keyCode == 65)
	{
		a_key_down = false;
	}
	else if(e.keyCode == 83)
	{
		s_key_down = false;
	}
	else if(e.keyCode == 68)
	{
		d_key_down = false;
	}
	else if(e.keyCode == 32)
	{
		space_key_down = false;
	}
});
