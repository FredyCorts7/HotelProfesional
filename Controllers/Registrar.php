<?php
    class Registrar extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function cliente() {
            $this->view->render($this, 'cliente');
        }

        public function registrarCliente() {
            
        }

        public function empleado() {
            $this->view->render($this, 'empleado');
        }

        public function registrarEmpleado() {
            
        }
    }