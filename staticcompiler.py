import os
import re

def markdown_to_html(md_text):
    html_lines = []

    ignoreflag = 0
    

    for line in md_text.split('\n'):

        if (ignoreflag == 1):
            # do stuff
            print()
            html_lines.append(line)
        else:
            line = line.strip()

            # Headers
            if line.startswith('### '):
                html_lines.append(f"<h3>{line[4:]}</h3>")
            elif line.startswith('## '):
                html_lines.append(f"<h2>{line[3:]}</h2>")
            elif line.startswith('# '):
                html_lines.append(f"<h1>{line[2:]}</h1>")

            # Unordered list
            elif line.startswith('- '):
                if not html_lines or not html_lines[-1].startswith('<ul>'):
                    html_lines.append("<ul>")
                html_lines.append(f"<li>{line[2:]}</li>")
            else:
                if html_lines and html_lines[-1].startswith('<li>') and not line.startswith('- '):
                    html_lines.append("</ul>")

                # Bold and italic
                line = line.replace('**', '<b>', 1).replace('**', '</b>', 1)
                line = line.replace('*', '<i>', 1).replace('*', '</i>', 1)

                # Links
                line = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', line)

                if line:
                    html_lines.append(f"<p>{line}</p>")

                if html_lines and html_lines[-1].startswith('<li>'):
                    html_lines.append("</ul>")

    return '\n'.join(html_lines)

def convert_folder(input_folder, output_folder):
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(input_folder):
        if filename.endswith('.md'):
            md_path = os.path.join(input_folder, filename)

            with open(md_path, 'r', encoding='utf-8') as f:
                md_content = f.read()

            html_content = markdown_to_html(md_content)

            html_filename = filename.rsplit('.', 1)[0] + '.html'
            html_path = os.path.join(output_folder, html_filename)

            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(html_content)

            print(f"Converted: {filename} -> {html_filename}")

# Example usage
input_dir = "/path/to/markdown"
output_dir = "/path/to/html_output"
convert_folder(input_dir, output_dir)
