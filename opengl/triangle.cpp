#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glBegin(GL_TRIANGLES);
    glColor3f(1.0f, 0.2f, 0.2f);
    glVertex2f(0.0f, 0.8f);
    glColor3f(0.2f, 1.0f, 0.3f);
    glVertex2f(-0.8f, -0.7f);
    glColor3f(0.2f, 0.4f, 1.0f);
    glVertex2f(0.8f, -0.7f);
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(800, 600);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("OpenGL Triangle");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}