import pygame
import random

pygame.init()

# global values class for the game
class DrawInformation:
  black = 0,0,0
  white = 255, 255, 255
  green = 0, 255, 0
  red = 255, 0,0
  gray = 128, 128, 128
  med_gray = 160,160,160
  drk_gray = 192,192,192
  backgr_color = white
  gradients = [
    gray,
    med_gray,
    drk_gray
  ]
  side_padding = 100
  top_padding = 150

  def __init__(self, width, height, list):
    # define the window & list of data
    self.width = width
    self.height = height
    self.window = pygame.display.set_mode((width, height))
    pygame.display.set_caption("Sorting Algorithm Visualization")
    self.set_list(list)

  def set_list(self, list):
    # calculate width/height of bars based on range of values
    self.list = list
    self.min_val = min(list)
    self.max_val = max(list)
    self.block_width = round((self.width - self.side_padding) / len(list))
    self.block_height = round((self.height - self.top_padding) / (self.max_val - self.min_val))
    # top left is 0,0 in pygame
    self.start_x = self.side_padding // 2

def generate_starting_list(n, min, max):
  list = []

  for _ in range(n):
    value = random.randint(min, max)
    list.append(value)
  return list

def draw(draw_info):
  # could be optimized but less chance of leftover stuff on canvas
  draw_info.window.fill(draw_info.backgr_color)
  draw_list(draw_info)
  pygame.display.update()

def draw_list(draw_info):
  # determine xy of each bar & adjust color shades
  list = draw_info.list
  
  for i, val in enumerate(list):
    # rectangles draw from topleft to downright in py
    x = draw_info.start_x + i * draw_info.block_width
    y = draw_info.height - (val * draw_info.min_val ) * draw_info.block_height

    color = draw_info.gradients[i % 3]

    pygame.draw.rect(draw_info.window, color, (x, y, draw_info.block_width, draw_info.height))
  

def main():
  run = True
  clock = pygame.time.Clock()
  
  n = 50
  min = 0
  max = 100
  list =  generate_starting_list(n, min, max)
  draw_info = DrawInformation(800, 600, list)
  # print("draw_info", draw_info)

  # pygame needs a constant loop to handle game events/renders
  while run:
    # max loops/sec
    clock.tick(60)
    draw(draw_info)

    # all events since last loop
    for event in pygame.event.get():
      if event.type == pygame.QUIT:
        run = False

  pygame.quit()

# if running this module directly
# this won't if module imported
if __name__ == "__main__":
  main()