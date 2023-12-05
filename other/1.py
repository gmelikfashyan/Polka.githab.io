from rembg import remove
from PIL import Image
input_path = 'puskin_art.jpg'
output_path = 'pushkin.png'
input = Image.open(input_path)
output = remove(input)
output.save(output_path)
