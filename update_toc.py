import os
import re

files = [f"lesson_{i:02d}.html" for i in range(12, 23)]
folder = r"/home/practicalace/projects/htmljs"

# Pattern to find the summary block and capture the label text
# Using a regex to match the summary block and extract the label
# Old summary block:
# <summary>
#     <h2 style="display: inline; margin: 0;">📑 LABEL</h2>
# </summary>

pattern = re.compile(r'<summary>\s*<h2 style="display: inline; margin: 0;">📑 (.*?)<\/h2>\s*<\/summary>')

# New summary block template:
new_template = """<summary aria-label="Toggle table of contents">
                    <span class="toc-icon" aria-hidden="true">📑</span>
                    <span class="toc-label">{label}</span>
                    <span class="toc-chevron" aria-hidden="true">▼</span>
                </summary>"""

for file_name in files:
    file_path = os.path.join(folder, file_name)
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        match = pattern.search(content)
        if match:
            label = match.group(1)
            # Reformat the new template to match the original indentation if needed
            # The original indentation seems to be 16 spaces for the tags.
            # My template is already indented.
            
            # Reconstruct the new block
            new_toc = new_template.format(label=label)
            
            # The replace method for string should work fine
            new_content = content.replace(match.group(0), new_toc)
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {file_name} with label '{label}'")
        else:
            print(f"Not found in {file_name}")
    else:
        print(f"File {file_path} not found")
