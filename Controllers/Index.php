<?php
    class Index extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function index() {
            $this->view->render($this, 'index');
        }

        public function reserve() {
            $this->view->render($this, 'reserve');
        }

        public function obtenerHabitaciones() {
            $data = $this->model->obtenerHabitaciones();
            if (is_array($data)) echo json_encode($data);
            else echo $data;
        }

        public function obtenerHabitacion() {
            $data = $this->model->obtenerHabitacion($_POST['idRoom']);
            if (is_array($data)) echo json_encode($data);
            else echo $data;
        }
    }