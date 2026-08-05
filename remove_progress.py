import os
import re

files = [f for f in os.listdir('.') if f.startswith('lesson_') and f.endswith('.html')]

# The progress indicator boilerplate to remove
pattern = re.compile(r'\s+<!-- Progress indicator -->\s+<div class="progress-indicator" role="progressbar" aria-label="Page scroll progress">\s+<div class="progress-bar"></div>\s+</div>')

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub('', content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filename}")
