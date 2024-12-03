#!/bin/bash

output_folder="should-not-matter"

mkdir -p "$output_folder"

for i in {1..250000}; do
  file_name="$output_folder/$i.js"
  echo "export default $i" > "$file_name"
done

echo "Created 250,000 files in $output_folder"