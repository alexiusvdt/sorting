FROM python:3.9.0-slim

COPY requirements.txt /

RUN pip3 install --upgrade pip

RUN pip3 install -r /requirements.txt

COPY . /api

WORKDIR /api

EXPOSE 8080

CMD ["gunicorn","--config", "gunicorn_config.py", "api:api"]