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
  backgr_color = white
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
    self.start_x = self.side_padding // 2