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
  font = pygame.font.SysFont('arial', 30)
  large_font = pygame.font.SysFont('arial', 40)

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
    # print("appended: ", value)
  return list

def draw(draw_info):
  # could be optimized but less chance of leftover stuff on canvas
  draw_info.window.fill(draw_info.backgr_color)
  controls = draw_info.font.render("R - Reset | SPACE - Start Sorting | A - Ascending | D - Descending", 1, draw_info.black)
  draw_info.window.blit(controls, (draw_info.width/2 - controls.get_width()/2 , 5))

  sorting = draw_info.font.render("I - Insertion Sort | B - Bubble Sort", 1, draw_info.black)
  draw_info.window.blit(sorting, (draw_info.width/2 - controls.get_width()/2 , 35))
  
  draw_list(draw_info)
  pygame.display.update()


def draw_list(draw_info, color_positions={}, clear_bg=False):
  # determine xy of each bar & adjust color shades
  list = draw_info.list

  # keep text blit, clear the graph only
  if clear_bg:
    clear_rect = (draw_info.side_padding//2, draw_info.top_padding,
                   draw_info.width - draw_info.side_padding, draw_info.height - draw_info.top_padding)
    pygame.draw.rect(draw_info.window, draw_info.backgr_color, clear_rect)

  for i, val in enumerate(list):
    # rectangles draw from topleft to downright in py
    x = draw_info.start_x + i * draw_info.block_width
    y = draw_info.height - (val * draw_info.min_val ) * draw_info.block_height

    color = draw_info.gradients[i % 3]
    
    # sorting color override
    if i in color_positions:
      color = color_positions[i]

    # this is a little goofy - works perfectly 1/3 of time
    pygame.draw.rect(draw_info.window, color, (x, y, draw_info.block_width, draw_info.height))

  if clear_bg:
    # force update
    pygame.display.update()
  
def bubble_sort(draw_info, ascending=True):
  list = draw_info.list

  for i in range(len(list) - 1):
    for j in range(len(list) - 1 - i):
      num1 = list[j]
      num2 = list[j + 1]

      if (num1 > num2 and ascending) or (num1 < num2 and not ascending):
        list[j], list[j + 1] = list[j + 1], list[j]
        draw_list(draw_info, {j: draw_info.green, j + 1: draw_info.red})
        # func is called for every swap, yield until called again. it pauses execution and resumes wherever keyword came from
        # it stores current state of func and then picks back up there. this way can still use controls & buttons as func doesn't have full control 
        yield True
      
  return list


def main():
  run = True
  clock = pygame.time.Clock()
  
  n = 50
  min = 0
  max = 100
  list =  generate_starting_list(n, min, max)
  draw_info = DrawInformation(1024, 768, list)
  sorting = False
  ascending = True

  # generator calls the function to create the bubble_sort object
  # first call returns a generator object, manually call the next() function and the next thing to be yielded
  # first step runs, then hits yield, then next() then yield, etc 
  # def gen():
  #   yield 1
  #   yield 2
  # g = gen()
  # next(g) -> 1
  # next(g) -> 2
  # next(g) -> .StopIterationException raised because there's nothing left
  sorting_algo_generator = None
  # name of generator func
  sorting_algorithm = bubble_sort
  sorting_algo_name = "Bubble Sort"
  

  # pygame needs a constant loop to handle game events/renders
  while run:
    # max loops/sec
    clock.tick(60)
    
    if sorting:
      # try to call next method of generator
      try:
        next(sorting_algo_generator)
      # turn off sorting once it's done
      except StopIteration:
        sorting = False  
    else:
      draw(draw_info)

    # all events since last loop
    for event in pygame.event.get():
      if event.type == pygame.QUIT:
        run = False
      if event.type != pygame.KEYDOWN:
        continue
      if event.key == pygame.K_r:
        list =  generate_starting_list(n, min, max)
        draw_info.set_list(list)
        sorting == False
      elif event.key == pygame.K_SPACE and sorting == False:
        sorting = True
        sorting_algo_generator = sorting_algorithm(draw_info, ascending)
      elif event.key == pygame.K_a and not sorting:
        ascending = True
      elif event.key == pygame.K_d and not sorting:
        ascending = False

  pygame.quit()

# if running this module directly
# this won't if module imported
if __name__ == "__main__":
  main()