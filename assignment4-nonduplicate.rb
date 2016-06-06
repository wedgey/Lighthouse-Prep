def non_duplicated_values(values)
  values.each do |val|
    if values.count(val) > 1
      values.delete(val)
    end
  end
  return values
end