<?php
    class Errors extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function error() {
            $this->view->render($this, 'error');
        }
    }