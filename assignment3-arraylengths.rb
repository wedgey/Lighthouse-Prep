def length_finder(input_array)	
	return input_array.collect {|val| val.length} #Use of collect! will overwrite the original variable and save memory
end