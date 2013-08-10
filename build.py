import os
from zipfile import ZipFile

def build_chrome():
  directories = ("js", "html", "img", "css")
  files = ("manifest.json",)
  with ZipFile("chrome.zip", "w") as chrome:
    for directory in directories:
      for filename in os.listdir(directory):
        if not filename.endswith("~"):
          chrome.write(os.path.join(directory, filename))
    for filename in files:
      chrome.write(filename)

if __name__ == "__main__":
  build_chrome()
